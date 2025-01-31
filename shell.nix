{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.yarn
    pkgs.git
  ];

  shellHook = ''
    echo "Shell loaded!"
    node -v
    yarn -v
  '';
}
