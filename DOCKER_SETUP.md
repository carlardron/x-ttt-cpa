# Legacy X-TTT-CPA Docker Setup

This project uses Docker to provide a reproducible environment for both development and production, targeting legacy Node.js/React code.

## Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac/Linux)
- [docker-compose](https://docs.docker.com/compose/)

## Services
- **react-app-dev**: Development container for `react_ws_src` (hot-reload, live editing)
- **react-app-prod**: Production build and static server for `react_ws_src`
- **ws**: Backend Node.js service from `WS` folder

## Usage

### Development
Run the following in the project root:

```sh
docker-compose up react-app-dev ws
```
- React app: http://localhost:3000
- Backend: http://localhost:8080
- Source code is mounted, so edits on host are reflected in the container.

### Production
To build and run the production containers:

```sh
docker-compose up --build react-app-prod ws
```
- React app (static build): http://localhost:5000
- Backend: http://localhost:8080

### Notes
- The containers use Node.js v14 for compatibility with legacy code. You may need to adjust the version in the Dockerfiles if you encounter issues.
- If you need to install new dependencies, do so in the container or update `package.json` and rebuild.
- For troubleshooting, check logs with `docker-compose logs`.

## File Overview
- `react_ws_src/Dockerfile.dev`: Dev container for React app
- `react_ws_src/Dockerfile.prod`: Production build for React app
- `WS/Dockerfile`: Backend service
- `docker-compose.yml`: Orchestration for all services

---

For further customization, edit the Dockerfiles or docker-compose.yml as needed.
