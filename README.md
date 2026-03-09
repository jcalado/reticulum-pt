# Reticulum // PT

Site da comunidade portuguesa do [Reticulum](https://reticulum.network/) — um stack de rede baseado em criptografia para construir redes mesh resilientes, encriptadas e descentralizadas.

## Sobre

Landing page em portugues com:

- Explicacao do Reticulum e funcionalidades
- Aplicacoes do ecossistema (Sideband, Nomad Network, MeshChat, Columba, LXST)
- Hardware compativel (LoRa boards, packet radio)
- Configuracoes de interface (RNode 868/433/2.4G, WiFi, Auto, TCP Client)
- Regulamentacao ANACOM para Portugal (868 MHz e 433 MHz)
- Links para a comunidade e documentacao

## Deploy

### Qualquer servidor estatico

Basta servir a raiz do projecto. Nao ha build step.

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

## Rede Portugal

Liga-te a rede Reticulum portuguesa:

```ini
[[Reticulum PT]]
  type = TCPClientInterface
  enabled = yes
  target_host = network.reticulum.pt
  target_port = 4242
```

## Links

- [Reticulum](https://reticulum.network/) — projeto oficial
- [GitHub](https://github.com/markqvist/Reticulum) — codigo fonte
- [Manual](https://reticulum.network/manual/) — documentacao tecnica
- [Sideband](https://github.com/markqvist/Sideband) — app de mensagens
- [Guia de inicio](https://reticulum.network/start.html) — comecar agora
