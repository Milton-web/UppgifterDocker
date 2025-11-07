# UppgifterDocker

Stoppa alla containar: 
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)


Skillnaden mellan builder/test-stage och runtime

Builder/test-stage innehåller all kod och alla utvecklingsberoenden.
runtime-stage innehåller bara det som faktiskt behövs för att kunna köra appen i produktion.

Varför man separerar dessa är för att inte skicka onödiga verktyg,filer och testverktyg. Detta 
gör att den mindre och snabbare att köra.

Fördelar med att skicka en mindre, renare image till Docker Hub.

Mindre storlek = snabbare hantering vid nerladdning och start
Lättare att underhålla i pipelines
Färre sårbarheter

Reflektion

Detta påverkar ett team genom att utvecklare kan snabbt testa och bygga medans de andra teamen
bara jobbar med den rena runtime-versionen. Det är också enklare att ha allt i en fil istället för
att underhålla flera olika Dockerfiler.

devmilton/min-app        runtime   e13b80efa7b8   12 minutes ago   212MB
devmilton/min-app-test   latest    ded4202c2ee7   12 minutes ago   1.6GB

## Dokumentation

Den senaste versionen av dokumentationen genereras automatiskt och finns på GitHub Pages:

[📖 Visa JSDoc-dokumentation](https://Milton-web.github.io/UppgifterDocker/)
