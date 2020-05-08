# PS6 Redemption : Windows Home
## Requirements
1. Download the latest [Virtualbox](https://www.virtualbox.org/wiki/Downloads) release.
2. Download the latest [Docker Toobox](https://github.com/docker/toolbox/releases) release.
3. Download [this repository](https://github.com/2019-2020-ps6/2019-2020-ps6-rendu-redemption), and place it somewhere on your computer.

## Install
1. Install Virtualbox. 
[[Screenshot]](https://i.imgur.com/Sw0H0ia.png)
2. Install Docker Toobox.
[[Screenshot]](https://i.imgur.com/seMyelQ.png)
3. Disable Virtualbox during the installation.
[[Screenshot]](https://i.imgur.com/cOpVV8c.png)
4. Open Virtualbox, and configure the virtual machine called `default`. 
[[Screenshot]](https://i.imgur.com/IqjdCMv.png)
5. Navigate to `Network` > `Advanced`, and select `Port forwarding`.
[[Screenshot]](https://i.imgur.com/GXDaiaF.png)
6. Add two port forwarding rules.
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
8. (optional) Increase memory usage.
[[Screenshot]](https://i.imgur.com/V5cWg1v.png)
9. (optional) Increase CPU cores usage.
[[Screenshot]](https://i.imgur.com/xK5ua4v.png)

## Run
1. Open Docker Quickstart Terminal.
[[Screenshot]](https://i.imgur.com/K4pOwrD.png)
2. Navigate to the root of this repository on your computer.
```bash
cd ~/Documents/2019-2020-ps6-rendu-redemption
```
3. Enable the conversion from Windows paths to Unix paths.
```
export COMPOSE_CONVERT_WINDOWS_PATHS=1
```
4. Build and run the project.
```bash
docker-compose up --build
```
5. Wait for Docker to do your job (~8min).
[[Screenshot]](https://i.imgur.com/VKHqWi0.png)
6. Enjoy the website.
[[Screenshot]](https://i.imgur.com/k641NEk.png)

## Stop
1. Press `Control+C` to stop all containers.
2. Wait for Docker to stop all containers.
3. Remove all the containers.
```bash
docker-compose down
```