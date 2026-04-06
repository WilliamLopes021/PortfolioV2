# Portfolio V2

## Descrição

Este é o meu portfólio pessoal versão 2, uma aplicação web interativa que apresenta meus projetos, habilidades e experiências. O projeto inclui elementos 3D para uma experiência visual imersiva, destacando minha paixão por design e tecnologia.

## Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: React.js para componentes reutilizáveis e gerenciamento de estado
- **3D Graphics**: Three.js para renderização de modelos 3D e animações
- **Build Tool**: Vite para desenvolvimento rápido e otimização de produção
- **Styling**: Tailwind CSS para estilos responsivos e modernos
- **Outros**: Git para controle de versão, Node.js para dependências

## Modelos 3D

Os modelos 3D foram implementados utilizando a biblioteca Three.js, que permite a criação de cenas 3D no navegador via WebGL. Os modelos incluem objetos como cubos animados, esferas e formas geométricas personalizadas para representar projetos ou seções do portfólio.

### Implementação

1. **Carregamento de Modelos**: Modelos foram criados programaticamente em Three.js (ex.: geometrias básicas como `BoxGeometry` e `SphereGeometry`) ou importados de arquivos GLTF/OBJ externos, carregados via `GLTFLoader`.
2. **Animações**: Utilizei o sistema de animação do Three.js com `requestAnimationFrame` para rotações suaves e transições, integradas com o ciclo de vida do React para sincronização.
3. **Interatividade**: Adicionei controles de câmera (como `OrbitControls`) para permitir ao usuário explorar os modelos 3D, e eventos de mouse para interações (ex.: hover para destacar elementos).
4. **Otimização**: Implementei LOD (Level of Detail) e texturas comprimidas para melhorar o desempenho em dispositivos móveis.

## Instalação

1. Clone o repositório: `git clone https://github.com/WilliamLopes021/portfolioV2.git`
2. Navegue para o diretório: `cd portfolioV2`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm run dev`

## Uso

Abra o navegador e acesse `http://localhost:5173` para visualizar o portfólio. Navegue pelas seções para explorar projetos e interagir com os elementos 3D.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias.

## Licença

Este projeto está sob a licença MIT.
