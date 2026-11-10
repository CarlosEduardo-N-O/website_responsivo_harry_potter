# Atividade 03 — Responsivo com Flexbox

**Aluno:** Carlos Eduardo Nogueira de Oliveira

## Tema

Arquivo Mágico: biografia do personagem Harry Potter e bibliografia dos sete romances de J. K. Rowling. Projeto acadêmico de fã, sem vínculo oficial. Há spoilers na seção da jornada.

## Executar

Abra `index.html` para visualizar. Para testar os recursos PWA, execute nesta pasta:

```powershell
python -m http.server 8000
```

Acesse http://localhost:8000. O service worker exige localhost ou HTTPS. Visite uma vez com conexão antes de testar offline. Em navegador compatível, use a opção de instalar aplicativo. A instalação depende do suporte do navegador.

## Requisitos

- HTML semântico e CSS Flexbox no cabeçalho, banner, biografia, linha do tempo, livros e rodapé. Não utiliza CSS Grid.
- Layout responsivo com media queries: livros em quatro, três ou duas colunas conforme a largura disponível.
- Textos autorais resumidos, retrato, castelo e sete capas ilustrativas locais.
- Menu de navegação com hambúrguer no celular, atributos de acessibilidade e fechamento por Escape ou seleção de seção.
- Rodapé, fontes, link para pular ao conteúdo e foco visível.
- Manifesto com ícones PNG 192/512 px, cores, escopo, idioma e modo standalone.
- Service worker para cache e carregamento offline após a primeira visita.
- Sem bibliotecas, fontes ou imagens externas necessárias ao funcionamento.

## Referências de conteúdo

- https://www.hp-lexicon.org/character/potter-family/harry-potter/
- https://stories.jkrowling.com/faqs/
- https://stories.jkrowling.com/harrypotter/

A biografia trata do personagem fictício; a bibliografia lista os livros da série escritos por J. K. Rowling. Os anos informados são os das primeiras publicações no Reino Unido. Os títulos seguem as edições brasileiras. As ilustrações foram criadas para o exercício e não representam capas oficiais. Textos não são transcrições dos romances.

## Arquivos

`index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, `assets/` e `verificacao/` (prints e relatório de testes).

