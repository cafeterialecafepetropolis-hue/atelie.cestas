# Ateliê Cestas — página de vendas

Landing page estática, responsiva e sem dependências de build. O projeto foi criado para ser publicado diretamente no GitHub Pages.

## Arquivos

- `index.html`: estrutura e textos da página.
- `styles.css`: identidade visual, responsividade e ilustrações CSS.
- `script.js`: menu mobile, ano automático e mensagens personalizadas para o WhatsApp.
- `assets/logo.svg`: marca vetorial editável.
- `assets/og-cover.svg`: imagem de compartilhamento social.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `atelie-cestas`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, a pasta `/ (root)` e clique em **Save**.
6. Aguarde o GitHub gerar o endereço público.

A página não usa Node, React ou banco de dados. Basta abrir `index.html` localmente ou publicar os arquivos no Pages.

## Personalização rápida

- Troque o número `5524992668661` em `index.html` e `script.js` pelo WhatsApp correto, sempre com código do país e DDD, sem espaços ou símbolos.
- Edite os nomes e descrições das três cestas diretamente em `index.html`.
- Para usar fotos reais dos produtos, substitua os blocos `.product-visual` por imagens e mantenha `object-fit: cover` no CSS.
- Atualize o link do Instagram caso o @ oficial seja diferente.

## Observação

Os textos e o visual foram baseados na referência enviada do perfil do Instagram. Preços, áreas de entrega, prazos e catálogo não foram inventados; podem ser incluídos quando você tiver essas informações.
