# Script Raspadinha Premium - Página de Vendas Integrada

Página de vendas completa para o Script Raspadinha Premium com **seção de destaque integrada** no topo.

## 📋 O Que Foi Adicionado

### Nova Seção de Destaque (Topo da Página)

- ✅ **Vídeo em Destaque**: Player de vídeo grande e visível com controles
- ✅ **Mensagem de Melhor Preço**: Gradiente amarelo-laranja chamativo
- ✅ **Contagem Regressiva Infinita**: Timer que reinicia a cada 10 minutos
- ✅ **Botão CTA Verde**: "FINALIZAR COMPRA AGORA" em destaque
- ✅ **Entrega e Suporte**: Informações de entrega instantânea e contato

### Conteúdo Original Mantido

Todo o conteúdo original da sua página foi preservado:
- Header com logo e botão
- Hero section
- Banner showcase
- Cards de raspadinhas
- Features
- CTA final
- Footer

## 🚀 Como Usar

### Opção 1: Abrir Diretamente

Abra o arquivo `index.html` em qualquer navegador.

### Opção 2: Subir no GitHub

```bash
git init
git add .
git commit -m "Página de vendas com seção de destaque"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

Depois ative o GitHub Pages em Settings → Pages → Branch: main

## 📁 Estrutura

```
pagina-venda-integrada/
├── index.html              # Página principal (com nova seção)
├── css/
│   └── style.css          # Estilos (original + novos)
├── js/
│   └── countdown.js       # Contagem regressiva
├── images/
│   ├── logo_raspa_monkey.png
│   ├── baner1.png
│   ├── raspadinha_*.png
│   └── video-destaque.mp4  # NOVO: Vídeo da seção
├── .nojekyll
└── README.md
```

## 🎨 Personalização

### Alterar Link de Compra

Substitua `https://mpago.la/1AYshQb` pelo seu link em 3 lugares no `index.html`:
1. Botão do header
2. Botão "FINALIZAR COMPRA AGORA"
3. Botões da hero e CTA final

### Alterar Tempo do Timer

Edite `js/countdown.js`, linha 6:

```javascript
const COUNTDOWN_DURATION = 10 * 60; // 10 minutos
```

### Alterar Email de Suporte

Substitua `dark2020dark2020@gmail.com` no `index.html`.

### Substituir Vídeo

Troque `images/video-destaque.mp4` pelo seu vídeo (MP4, máx 50MB).

## 📱 Responsivo

Design adaptado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🎯 Funcionalidades

- ⏰ Timer infinito (cria urgência)
- 🎬 Vídeo autoplay (muted)
- ✨ Animações (pulse, shake, scale)
- 📧 Email clicável
- 🎨 Design moderno dark mode

## 📞 Suporte

**Email:** dark2020dark2020@gmail.com

---

**Desenvolvido para maximizar conversões! 🚀**
