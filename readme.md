# Evolars ltda V2

## Deploy no Railway

Este projeto está preparado para deploy via `Dockerfile` no Railway.

### Como funciona

- O Railway injeta a variável de ambiente `PORT` automaticamente.
- O Nginx usa um template (`nginx.conf.template`) e gera o `default.conf` no boot com `envsubst`.
- O servidor escuta em `${PORT}` (fallback local: `8080`).

### Passos

1. Crie um novo serviço no Railway apontando para este repositório.
2. Garanta que o deploy type está em Dockerfile (normalmente detectado automaticamente).
3. Faça deploy.

> Dica: para teste local rápido, rode a imagem e mapeie a porta `8080`.
