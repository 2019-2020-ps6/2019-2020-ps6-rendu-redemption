# PS6 Redemption : Manjaro Linux
## Requirements
1. Download [this repository](https://github.com/2019-2020-ps6/2019-2020-ps6-rendu-redemption), and place it somewhere on your computer.
2. Install Docker Engine and Docker Compose.
```bash
sudo pacman -S docker docker-compose
```
3. Add `docker` group to your user.
```bash
sudo usermod -aG docker $USER
```

## Run
1. Start Docker Engine.
```bash
sudo systemctl start docker
```
2. Navigate to the root of this repository on your computer.
```bash
cd ~/Documents/2019-2020-ps6-rendu-redemption
```
3. Build and run the project with Docker Compose.
```bash
docker-compose up --build
```
4. Wait for Docker to do your job (~5min).
5. Enjoy the website.
[[Screenshot]](https://i.imgur.com/k641NEk.png)

## Stop
1. Press `Control+C` to stop all containers.
2. Wait for Docker to stop all containers.
3. Remove all the containers.
```bash
docker-compose down
```
