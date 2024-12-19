{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  inputs.brew-api.url = "github:BatteredBunny/brew-api";
  inputs.brew-api.flake = false;
  inputs.brew-nix.url = "github:BatteredBunny/brew-nix";
  inputs.brew-nix.inputs.brew-api.follows = "brew-api";
  inputs.brew-nix.inputs.nixpkgs.follows = "nixpkgs";
  inputs.brew-nix.inputs.flake-utils.follows = "flake-utils";

  inputs.nixcasks.url = "github:jacekszymanski/nixcasks";
  inputs.nixcasks.inputs.nixpkgs.follows = "nixpkgs";


  inputs.mac-app-util.url = "github:hraban/mac-app-util";

  outputs =
    { self
    , nixpkgs
    , flake-utils
    , brew-nix
    , mac-app-util
    , nixcasks
    , ...
    }:
    flake-utils.lib.eachDefaultSystem (system: {
      devShells.default =
        let
          osVersion = "sonoma";

          nixcasks_ = (nixcasks.output {
            inherit osVersion;
          }).packages.${system};

          nixcasksOverlay = final: prev: {
            nixcasks = (nixcasks.output {
              inherit osVersion;
            }).packages."${prev.system}";
          };


          pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
            overlays = [
              brew-nix.overlays.default
              nixcasksOverlay
            ];
            # config.packageOverrides = _: {
            #   nixcasks = nixcasks_;
            #   # inherit nixcasks_;
            # };
          };
          brewPackages = [
            pkgs.nixcasks.android-studio
            # pkgs.brewCasks.android-studio
            pkgs.brewCasks.firefox
            # pkgs.nixcasks.firefox
          ];
          macAppUtil = pkgs.lib.getExe' mac-app-util.packages."${system}".default "mac-app-util";
          brewApplications = pkgs.runCommand "brewApplications" { } ''
            mkdir --parents $out
            for APP in ${builtins.concatStringsSep " " brewPackages}; do
              if [ -e $APP/Applications ]; then
                ln --symbolic $APP/Applications/* $out
              fi
            done
          '';
        in
        pkgs.mkShellNoCC {
          packages = [
            pkgs.devbox
          ]
          ++
          (pkgs.lib.optionals pkgs.stdenv.hostPlatform.isDarwin [
            brewPackages
          ]);

          # shellHook = ''
          #   # make apps available in the launcher and up to date in the dock
          #   ls -l ${brewApplications}

          #   if [ "$(${pkgs.lib.getExe' pkgs.coreutils "uname"})" == "Darwin" ]; then
          #     ${macAppUtil} sync-trampolines ${brewApplications} ~/Applications/pass-culture-app-native/
          #   fi
          # '';
        };
    });
}
