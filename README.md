# React + Vite + ThreeJs

- 29/03/2026- Início do projeto
- 30/03/2026- Finalização da montagem do layout e introdução dos elementos 3D
- 31/03/2026- Estilização da Hero Section, posicionamento e envio de novos modelos e introdução da interatividade com os modelos
- 01/04/2026- Mudança da NavBar, AboutSection e mudança no posicionamento do banner da heroSection
- 02/04/2026- Correção da seção sobre mim, minhas skills e ínicio da seção de projetos.
- 03/04/2026- Possível finalização?????

[reference](https://youtu.be/kt0FrkQgw8w?si=Ov_osiqXYyCARPie)
[conversor-de-modelos](https://gltf.pmnd.rs/)
Desenvolvimento...

## Codegen command

npx gltfjsx nome-do-model.glb -t -T -o caminho/de/saida/arquivo.tsx
npx gltfjsx nome-do-model.glb -t -T -o src\components\3DModels\nome.tsx

## Position Notations

### Door

- {"rotationX":-6.3}
- {"rotationY":-8.3}
- {"rotationZ":-0.3}
- {"positionX":-0.7}
- {"positionY":-2.1}
- {"positionZ":0.7}
- {"scale":1.0}

### PC

```JS
  <HackerRoom
    scale={0.75}
    position={[-1.2, -1.3, -2]}
    rotation={[0.3, 3.7, 0]}
  />
  <group>
    <ReactLogo
      scale={0.4}
      position={[0.8, 0.5, -6.5]}
      rotation={[-0.3, -5.7, -1.7]}
    />
    <TypeScriptLogo
      scale={6.3}
      position={[-2.3, 0.3, -2.2]}
      rotation={[-6.6, 1, 0.3]}
    />
  </group>

```

### Sanctum

```JS
   scale={1.0}
   position={[0.1, -0.1, -4.5]}
   rotation={[2.5, -0.7, 1.1]}
```

## Tarefas

- Fazer a seção de skills e projetos.
