# PS6 Redemption : Windows Home
## Warning
Windows Home is by far the hardest to use for Docker.
However, if you follow along, there will be no problem !

## Requirements
1. Download the latest [Virtualbox](https://www.virtualbox.org/wiki/Downloads) release (6.0.0+).
2. Download the latest [Docker Toobox](https://github.com/docker/toolbox/releases) release (19.0.0+).
3. Download [this repository](https://github.com/2019-2020-ps6/2019-2020-ps6-rendu-redemption), and place it somewhere on your computer.

## Install
1. Install `Virtualbox`. 
[[Screenshot]](https://i.imgur.com/Sw0H0ia.png)
2. Install `Docker Toobox`.
[[Screenshot]](https://i.imgur.com/seMyelQ.png)
3. Disable `Virtualbox` during the installation of `Docker Toobox`.
[[Screenshot]](https://i.imgur.com/cOpVV8c.png)
4. Open `Docker Quickstart Termina`l.
5. Wait for `Docker Toolbox` to install all dependencies.
[[Screenshot]](https://i.imgur.com/K4pOwrD.png)
6. Close `Docker Quickstart Terminal`.
6. Open `Virtualbox`, and configure the virtual machine called `default`. 
[[Screenshot]](https://i.imgur.com/IqjdCMv.png)
7. Navigate to `Network` > `Advanced`, and select `Port forwarding`.
[[Screenshot]](https://i.imgur.com/GXDaiaF.png)
8. Add two port forwarding rules.
[[Screenshot]](https://i.imgur.com/YO0wYrU.png)
```
Name: client
Protocol: TCP
Host IP: 127.0.0.1
Host Port: 4200
Guest Port: 4200
```
```
Name: server
Protocol: TCP
Host IP: 127.0.0.1
Host Port: 3000
Guest Port: 3000
```
9. (optional but recommended) Allocate more memory.
[[Screenshot]](https://i.imgur.com/V5cWg1v.png)
10. (optional but recommended) Allocate more CPU cores.
[[Screenshot]](https://i.imgur.com/xK5ua4v.png)

## Run
1. Re-open `Docker Quickstart Terminal`.
[[Screenshot]](https://i.imgur.com/K4pOwrD.png)
2. Navigate to the root of this repository on your computer.
```bash
cd ~/Documents/2019-2020-ps6-rendu-redemption
```
3. Enable the conversion from Windows paths to Unix paths.
```
export COMPOSE_CONVERT_WINDOWS_PATHS=1
```
4. Run this command to convert `\r\n` into `\n` for linux to work.
```bash
dos2unix server/entrypoint.sh
```
5. Build and run the project.
```bash
docker-compose up --build
```
NB: If docker fails, restart the terminal and rerun the command.

6. Wait for `Docker Toolbox` to do your job (~10min).
[[Screenshot]](https://i.imgur.com/VKHqWi0.png)
7. Enjoy the website at `localhost:4200`.
[[Screenshot]](https://i.imgur.com/k641NEk.png)

## Stop
1. Press `Control+C` to stop all containers.
2. Wait for `Docker Toolbox` to stop all containers.
3. Remove all the containers.
```bash
docker-compose down
```
