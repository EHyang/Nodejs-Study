# Nginx Setting

## Install

- Install
```
	sudo apt-get install nginx
```

- Check
```
	sudo systemctl status nginx
```

- Modify
```
 	sudo vi /etc/nginx/nginx.conf
```
 > (http 사이에)
 ```
	server {
		listen 80;
		listen [::]:80;

		server_name [ip 주소 혹은 도메인];

		location / {
			proxy_pass http://타겟 주소:포트번호;
		}
	}
```

- Move
```
	sudo mv /etc/nginx/sites-enabled/default /etc/nginx/
```

- Start
```
	sudo service nginx start
```
