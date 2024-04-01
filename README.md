# Proyecto de Integración con TheGraph

Este repositorio es un ejemplo de cómo implementar una integración con TheGraph protocol utilizando la librería "@graphprotocol/client-cli".

## Comenzando

Primero, ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```


Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.



## Estructura del Proyecto
### `package.json`

Este archivo contiene todas las dependencias necesarias para el proyecto. Las más relevante para TheGraph es:

- `@graphprotocol/client-cli`: Esta librería facilita la integración con TheGraph.


### `.graphclientrc.yml`

Este archivo de configuración define la fuente de datos para TheGraph. En este caso, se está utilizando el endpoint de BoredApeYachtClub.
```yml
sources:
  - name: BoredApeYachtClub
    handler:
      graphql:
        endpoint: https://api.studio.thegraph.com/query/43248/ape-tutorial/v4
documents:
  - ./src/utils/graphql/getApes.graphql
```