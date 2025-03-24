# Guía Completa de Docker y Máquinas Virtuales

## 1. ¿Qué es una Máquina Virtual?
Las máquinas virtuales (VMs) emulan hardware completo y requieren un sistema operativo completo por cada instancia. Estas reservan recursos de hardware para su correcto funcionamiento.

## 2. ¿Qué es Docker?
Docker es un software que permite crear, probar e implementar aplicaciones en contenedores. Los contenedores son unidades estandarizadas que contienen todo lo necesario para ejecutar una aplicación.

**Ventajas de los contenedores sobre las VM:**
- **Portabilidad**: "Funciona en mi máquina" ya no es un problema.
- **Aislamiento**: No hay conflictos entre versiones de dependencias.
- **Eficiencia**: Menos consumo de recursos comparado con las VMs.
- **Escalabilidad**: Fácil despliegue en la nube.

### Docker vs VM

![docker architecture](https://media.licdn.com/dms/image/v2/D5612AQFDcXQ1J8i3sQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1722110850170?e=1746662400&v=beta&t=C4qbDLTtm-bRFkMiiU08PKXOeJU8FaOrKgm4d_aUyms)

---

## 3. Instalación de Docker

### En Windows
1. Descargar Docker Desktop: [Instalador oficial](https://docs.docker.com/desktop/setup/install/windows-install/)
2. Activar la característica de WSL:
   ```sh
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```
3. Activar la característica de virtualización:
   ```sh
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
4. (Opcional) Actualizar el kernel de Linux: [Guía oficial](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

### En Linux (Ubuntu)
```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.asc > /dev/null
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

---

## 4. Comandos Básicos de Linux
### Navegación en el sistema de archivos
```sh
pwd  # Mostrar ruta actual
ls  # Listar archivos y carpetas
ls -l  # Listar con detalles
cd /home  # Moverse a /home
cd ..  # Subir un nivel
cd ~  # Ir al home del usuario
```

### Manipulación de archivos y carpetas
```sh
mkdir mi_carpeta  # Crear carpeta
touch archivo.txt  # Crear archivo vacío
echo "Hola" > hola.txt  # Escribir en archivo
cat hola.txt  # Ver contenido del archivo
rm hola.txt  # Eliminar archivo
rmdir mi_carpeta  # Eliminar carpeta vacía
rm -r mi_carpeta  # Eliminar carpeta con contenido
```

### Permisos y procesos
```sh
chmod +x script.sh  # Dar permisos de ejecución
ps aux  # Ver procesos en ejecución
kill <PID>  # Terminar proceso por ID
```

### Gestor de paquetes en Ubuntu
```sh
sudo apt update  # Actualizar lista de paquetes
sudo apt upgrade  # Instalar actualizaciones
tsudo apt install curl -y  # Instalar paquete
```

### Redirección de salida y pipes
```sh
>  # Sobrescribe un archivo con la salida del comando
>>  # Agrega contenido al final del archivo
<  # Usa el contenido de un archivo como entrada de un comando
2>  # Guarda solo los errores en un archivo
2>>  # Agrega solo los errores al final del archivo
&>  # Guarda la salida normal y los errores en un archivo
|  # Los pipes permiten usar la salida de un comando como entrada de otro
```

---

## 5. Comandos básicos de Docker

### Información y ayuda
```sh
docker --version  # Ver la versión instalada
docker info  # Ver información del sistema Docker
docker <comando> --help  # Obtener ayuda de un comando
```

### Gestíon de imágenes
```sh
docker search <nombre>  # Buscar imagen en Docker Hub
docker pull <nombre>  # Descargar una imagen
docker images  # Listar imágenes descargadas
docker rmi <nombre>  # Eliminar imagen
```

### Gestíon de contenedores
```sh
docker run -it <imagen> bash  # Crear y ejecutar contenedor interactivo
docker run -d <imagen>  # Ejecutar contenedor en segundo plano
docker ps  # Listar contenedores en ejecución
docker ps -a  # Listar todos los contenedores
docker stop <ID>  # Detener un contenedor
docker rm <ID>  # Eliminar un contenedor
docker restart <ID>  # Reiniciar un contenedor
docker logs -f <ID>  # Ver logs en tiempo real
docker exec -it <ID> bash  # Acceder al terminal de un contenedor
```

### Gestíon de volúmenes
```sh
docker volume create <nombre>  # Crear un volumen
docker volume ls  # Listar volúmenes
docker volume rm <nombre>  # Eliminar un volumen
```

### Redes en Docker
```sh
docker network ls  # Listar redes disponibles
docker network create <nombre>  # Crear una red
docker network connect <red> <ID>  # Conectar contenedor a una red
docker network disconnect <red> <ID>  # Desconectar contenedor de una red
```

### Docker Compose
```sh
docker-compose up -d  # Ejecutar docker-compose.yml
docker-compose down  # Detener servicios
docker-compose logs -f  # Ver logs
```

---

Esta guía proporciona una base sólida para comenzar con Docker y Linux, abordando desde la instalación hasta la gestión de contenedores, imágenes y redes. 🚀
