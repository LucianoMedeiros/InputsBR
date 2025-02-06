# **Component: `<InputPhone />`**

### 📖 **Description**

## O componente `InputPhone` renderiza um campo de entrada de formulário com suporte a labels posicionadas dinamicamente, validação obrigatória e estilização personalizada. Ele é projetado para ser reutilizável e flexível em diferentes contextos.

## 📦 **Import**

```js
import { InputPhone } from "inputsbr";
```

---

## ⚙️ **Basic Usage**

```tsx
<InputPhone
  name="celular"
  label="Celular"
  value="{value}"
  onChange="{handlePhoneChange}"
  mask="(00) 0 0000-0000"
/>
```

---

## 🛠️ **Props (Properties)**

| **Propriety**   | **Type**                   | **Is required?** | **Default** | **Description**                                                                  |
| --------------- | -------------------------- | ---------------- | ----------- | -------------------------------------------------------------------------------- |
| `label`         | `string`                   | Sim              | -           | O texto da label associada ao campo.                                             |
| `name`          | `string`                   | Sim              | -           | O nome associado ao campo                                                        |
| `value`         | `string`                   | Sim              | -           | O valor atual do campo.                                                          |
| `onChange`      | `(event) => void`          | Sim              | -           | Função chamada quando o valor do campo é alterado.                               |
| `mask`          | `string`                   | Não              | -           | Define a máscara que deve ser visualizado. Ex `mask="(99) 9 9999-9999"`          |
| `id`            | `string`                   | Não              | `name`      | O identificador do campo. Se não for fornecido, será o mesmo que `name`.         |
| `required`      | `boolean`                  | Não              | `false`     | Indica se o campo é obrigatório. Quando estiver ativo, ele adiciona \* na label. |
| `disabled`      | `boolean`                  | Não              | `false`     | Indica se o campo será bloqueado para edição.                                    |
| `onBlur`        | `(event) => void`          | Não              | -           | Função chamada quando é retirado o foco do campo.                                |
| `onFocus`       | `(event) => void`          | Não              | -           | Função chamada quando é colocado foco no campo.                                  |
| `className`     | `string`                   | Não              | -           | Define as classes de css no container do campo.                                  |
| `icon`          | `ReactNode`                | Não              | -           | Define um ícone para aparecer antes ou depois do campo.                          |
| `iconPosition`  | `"left" or "right"`        | Não              | `left`      | Define a posição do ícone que pode ser à direita ou à esquerda.                  |
| `errorMessage`  | `string`                   | Não              | -           | Define o texto de mensagem de validação do campo.                                |
| `labelPosition` | `"left", "top" or "right"` | Não              | `left`      | Define a posição do ícone que pode ser à direita ou à esquerda.                  |

---

## 🚀 **Exemplo Avançado**

### **Entrada de telefone com máscara personalizada**

```tsx
<InputPhone
  name="phone"
  label="Cellphone"
  value={phoneValue}
  onChange={handlePhoneChange}
  placeholder="(00) 00000-0000"
  mask="(99) 99999-9999"
  required
  disabled={disabled}
  errorMessage={errorMessage}
  icon={<>📱</>}
/>
```

---

## 🎨 **Estilização Personalizada**

O componente utiliza a função `classNames` para aplicar classes CSS dinamicamente com base na posição da label. Para personalizar estilos:

```css
.position-left {
  display: flex;
  align-items: center;
}

.position-right {
  display: flex;
  flex-direction: row-reverse;
}
```

---

## 🧪 **Testes**

O componente pode ser testado usando **Jest** e **React Testing Library**. Aqui está um exemplo básico de teste:

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ContainerInput from "./ContainerInput";

test("deve renderizar o campo de entrada com a label", () => {
  render(<ContainerInput name="email" label="Email" type="email" />);

  const labelElement = screen.getByLabelText(/email/i);
  expect(labelElement).toBeInTheDocument();
});

test("deve disparar o evento onChange ao alterar o valor", () => {
  const handleChange = jest.fn();
  render(
    <ContainerInput
      name="email"
      label="Email"
      type="email"
      onChange={handleChange}
    />
  );

  const inputElement = screen.getByLabelText(/email/i);
  fireEvent.change(inputElement, { target: { value: "test@example.com" } });
  expect(handleChange).toHaveBeenCalled();
});
```

---

## 📄 **Notas**

- Este componente é responsivo por padrão, mas pode ser personalizado via classes CSS adicionais.
- Certifique-se de definir corretamente o atributo `name` para facilitar a coleta dos dados no formulário.

---

## 🚀 **Pronto para usar**

O componente `ContainerInput` é flexível e pode ser reutilizado em diferentes contextos de formulário, como autenticação, cadastro e perfis de usuário. Com suporte a validações e personalizações, ele é uma escolha sólida para aplicações modernas.

---

Esse modelo pode ser adaptado conforme a necessidade do seu projeto e componentes! 🎉
