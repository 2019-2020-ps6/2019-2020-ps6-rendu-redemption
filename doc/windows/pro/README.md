# PS6 Redemption : Windows Pro
## Requirements
1. Download the latest [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/) release.
2. Download [this repository](https://github.com/2019-2020-ps6/2019-2020-ps6-rendu-redemption), and place it somewhere on your computer.

## Install
1. Install Docker Desktop for Windows. 
[[Screenshot]](https://i.imgur.com/0QsuodB.png)
2. Keep the default configuration during the installation.
[[Screenshot]](https://i.imgur.com/iNMKx2v.png)
3. Reboot your computer.

## Run
1. Open Docker Desktop for Windows.
2. When Docker Desktop is ready, you will receive a notification.
[[Screenshot]](https://i.imgur.com/mX2t1LB.png)
3. Open Windows PowerShell.
[[Screenshot]](https://i.imgur.com/sh827FG.png)
4. Navigate to the root of this repository on your computer.
```bash
cd .\Documents\2019-2020-ps6-rendu-redemption\
```
5. Build and run the project.
```bash
docker-compose up --build
```
6. When your are asked to share the access to the `C:\.` drive, press the `Share it` button.
[[Screenshot]](https://i.imgur.com/exqSOCX.png)
7. Wait for Docker to do your job (~5min).
[[Screenshot]](https://i.imgur.com/hWt5yL4.png)
8. Enjoy the website.
[[Screenshot]](https://i.imgur.com/k641NEk.png)

## Stop
1. Press `Control+C` to stop all containers.
2. Wait for Docker to stop all containers.
3. Remove all the containers.
```bash
docker-compose down
```