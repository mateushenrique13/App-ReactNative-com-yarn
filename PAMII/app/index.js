// AULA 1 - FLEXBOX

// import { Text, View } from "react-native";
// import { StyleSheet } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     ></View>
//   );
// }

/* ENTENDENDO O CÓDIGO - FLEXBOX
O código acima é um exemplo de como usar o Flexbox no React Native para criar um layout responsivo. Vamos entender cada parte do código:
1. Importações:
- `Text` e `View` são componentes básicos do React Native. `Text` é usado para exibir texto, enquanto `View` é um contêiner que pode conter outros componentes.
- `StyleSheet` é uma API do React Native que permite criar estilos para os componentes de forma mais organizada.

2. Componente `Index`:
- Este é o componente principal que será renderizado na tela.
- Dentro do componente, temos uma `View` principal que ocupa toda a tela (`flex: 1`) e centraliza seu conteúdo tanto vertical quanto horizontalmente (`justifyContent: "center"` e `alignItems: "center"`).

3. Três Views Filhas:
- Dentro da `View` principal, temos três `View` filhas, cada uma representando uma seção do layout.
- Cada `View` filha tem um estilo específico:
  - `flex`: define a proporção do espaço que cada `View` deve ocupar em relação às outras. Por exemplo, a primeira `View` tem `flex: 1`, a segunda tem `flex: 2` e a terceira tem `flex: 1`. Isso significa que a segunda `View` ocupará o dobro do espaço das outras duas.
  - `marginBottom` e `marginTop`: adicionam espaçamento entre as Views.
  - `backgroundColor`: define a cor de fundo de cada View.
  - `width`: define a largura da View como 80% da largura da tela.
  - `justifyContent` e `alignItems`: centralizam o conteúdo dentro de cada View.

4. Texto: 
- Dentro de cada `View`, temos um componente `Text` que exibe o nome da View correspondente.
- O estilo do texto inclui `fontWeight`, `color` e `fontSize` para definir a aparência do texto.
- `fontWeight: 600` define a espessura da fonte, `color: "white"` define a cor do texto como branco e `fontSize: 20` define o tamanho da fonte.

5. Resultado:
- O resultado final é um layout vertical com três Views, onde a segunda View (azul) ocupa o dobro do espaço das outras duas (vermelha e verde). Cada View tem um fundo colorido e contém texto centralizado.




 <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: "red",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 600, color: "white", fontSize: 20 }}>
          View 1
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: "blue",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 600, color: "white", fontSize: 20 }}>
          View 2
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: "green",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 600, color: "white", fontSize: 20 }}>
          View 3
        </Text>
      </View>
    </View>
*/

// ------------------------------------------------------------------------------------------

//Porjeto sem estilos

// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View>
//       <Text>Hello World!!!</Text>
//     </View>
//   );
// }

// ------------------------------------------------------------------------------------------

//AULA 2 - COMPONENTES STYLESHEET

// import { Text, View, StyleSheet } from "react-native";
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}> {nome} </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//     color: "#333333",
//   },
// });

//-------------------------------------------------------------------------------------------
//AULA 3 - VARIAVEIS
// var, let e const

// let nome = "Amoebinha";
// const idade = 25;

// {
//   let nome = "Lucas";
//   const idade = 20;
// }

// {
//   let nome = "Joao";
// }

/* 
    - var podem ser declaradas no mesmo escopo
    - let e const não podem ser declaradas no mesmo escopo
    - a diferença entre let e const é que let pode ser alterada e const não
    - const não pode ser declarada sem valor
    - let pode ser declarada sem valor
    - var pode ser declarada sem valor
*/

//AULA 4 - Importando componentes, arquivo externo

// let nome = "Amoebinha";

// import { Text, View, StyleSheet } from "react-native";
// import styles from "./styles"; // Importando o arquivo de estilos
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}> {nome} </Text>
//       <Text style={styles.textTwo}>"Despite everthing it's stills me. ❤️"</Text>
//       <Text style={styles.textTwo}>- Tobyfox</Text>
//     </View>
//   );
// }

// AULA 5 - Criação de um componente interno

// import { Text, View, StyleSheet } from "react-native";
// import styles from "./styles"; // Importando o arquivo de estilos

// function Title() {
//   return <Text style={styles.text}>"Despite everthing it's stills you." </Text>;
// }

// function Subtitle() {
//   return (
//     <View>
//       <Text style={styles.textTwo}> {props.text}</Text>
//       <Text style={styles.textTwo}>{props.paragraph}</Text>
//     </View>
//   );
// }

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textTwo}>
//         <Title />
//       </Text>
//       <Subtitle text="Tobyfox" paragraph="- Tobyfox" />
//     </View>
//   );
// }

//Aula 6 - Componentes Externos e props

// import { Text, View, StyleSheet } from "react-native";
// import styles from "./styles"; // Importando o arquivo de estilos
// import Title from "./components/title"; // Importando o componente Title

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Title title="Despite everything it's stills you." />
//       <Text style={styles.textTwo}>- Tobyfox</Text>
//     </View>
//   );
// }

//AULA 7 - UseState e useEffect
// import { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import styles from "./styles"; // Importando o arquivo de estilos

// export default function Index() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Amoebinha");
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((theme) => (theme === "light" ? "dark" : "light"));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.section}>
//         <Text style={styles.text}>E sou {name}! </Text>
//         <Text style={styles.textTwo}>Nome 1</Text>
//         <Button title="Nome 1" onPress={() => setName("Socaares")} />
//         <Text style={styles.textTwo}>Nome 2</Text>
//         <Button title="Nome 2" onPress={() => setName("Amoebinha")} />
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.textTwo}>Contador: {count}</Text>
//         <Button title="Adicionar" onPress={() => setCount(count + 1)} />
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.textTwo}>Tema: {theme}</Text>
//         <Button title="Mudar Tema" onPress={toggleTheme} />
//       </View>
//     </View>
//   );
// }

// AULA 8 - Array e foreach

// import { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import styles from "./styles"; // Importando o arquivo de estilos

// export default function Index() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Amoebinha");
//   const [theme, setTheme] = useState("light");
//   const [city, setCity] = useState("São Paulo");
//   const names = ["Socaares", "Amoebinha", "Lucas", "João", "Maria"];

//   const toggleTheme = () => {
//     setTheme((theme) => (theme === "light" ? "dark" : "light"));
//   };

//   function changeCity() {
//     setCity(city === "São Paulo" ? "Rio de Janeiro" : "São Paulo");
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.section}>
//         <Text style={styles.text}>E sou {name}! </Text>
//         {names.map((name, index) => (
//           <View key={index}>
//             <Text style={styles.textTwo}>{name}</Text>
//             <Button title={`Nome ${index + 1}`} onPress={() => setName(name)} />
//           </View>
//         ))}
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.textTwo}>Contador: {count}</Text>
//         <Button title="Adicionar" onPress={() => setCount(count + 1)} />
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.textTwo}>Tema: {theme}</Text>
//         <Button title="Mudar Tema" onPress={toggleTheme} />
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.textTwo}>Cidade: {city}</Text>
//         <Button title="Mudar Cidade" onPress={changeCity} />
//       </View>
//     </View>
//   );
// }

// AULA 9 - Array de Objetos e map

// const names = [
//   { name: "Socaares", age: 25 },
//   { name: "Amoebinha", age: 20 },
//   { name: "Lucas", age: 30 },
// ];

// import { Text, View } from "react-native";
// import React from "react";
// import styles from "./styles";

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Lista de Nomes:</Text>
//       {names.map((person, index) => (
//         <View key={index} style={styles.section}>
//           <Text style={styles.textTwo}>Nome: {person.name}</Text>
//           <Text style={styles.textTwo}>Idade: {person.age}</Text>
//         </View>
//       ))}
//     </View>
//   );
// }

// AULA 10 - Adicionando e removendo itens de um array
// import { ScrollView, Text, View, Button } from "react-native";
// import styles from "./styles"; // Importando o arquivo de estilos
// import { useState } from "react";

// export default function Index() {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Produto 1" },
//     { id: 2, name: "Produto 2" },
//     { id: 3, name: "Produto 3" },
//   ]);

//   const addProduct = () => {
//     const newProduct = {
//       id: products.length + 1,
//       name: `Produto ${products.length + 1}`,
//     };
//     setProducts([...products, newProduct]); // Adiciona um novo produto ao array
//   };

//   /*
//   esses trres pontos (...) são usados para espalhar o array existente e adicionar o novo produto ao final do array.
//  na funcao setProducts, os três pontos (...) são usados para espalhar o array existente e adicionar o novo produto ao final do array.
//   */

//   return (
//     <ScrollView contentContainerStyle={styles.scrollView}>
//       <View style={styles.container}>
//         <Text style={styles.text}>Lista de Produtos:</Text>
//         {products.map((product) => (
//           <View key={product.id} style={styles.section}>
//             <Text style={styles.textTwo}>{product.name}</Text>
//           </View>
//         ))}
//         <Button title="Adicionar Produto" onPress={addProduct} />
//       </View>
//     </ScrollView>
//   );
// }

// AULA 11 - usestate com input
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from "./styles"; // Importando o arquivo de estilos

export default function Index() {
  //HOOK
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState("");

  const obj = {
    id: 1,
    name: "Joao",
  };

  const array = [
    { id: 1, name: "Socaares" },
    { id: 2, name: "Amoebinha" },
    { id: 3, name: "Cavalca" },
  ];
  const addName = () => {
    if (newName.trim() !== "") {
      //elimina espaços em branco
      // Verifica se o campo de entrada não está vazio
      setName([...name, { id: name.length + 1, name: newName }]);
      setNewName(""); // Limpa o campo de entrada após adicionar
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nomes com array</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={newName}
        onChangeText={setNewName} // Atualiza o estado com o texto digitado
      />
      <Button title="Adicionar Nome" onPress={addName} />
      <View style={styles.section}>
        {name.map((item) => (
          <Text key={item.id} style={styles.textTwo}>
            {item.name}
          </Text>
        ))}
        <Text style={styles.textTwo}>Total de nomes: {name.length}</Text>
      </View>
    </View>
  );
}
