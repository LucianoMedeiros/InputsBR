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

O componente possui a seguinte estrutura:

```html
<div class="ibr-component ibr-input-phone">
  <div class="ibr-container">
    <label class="ibr-label">Label name</label>
    <div class="ibr-icon-container">
      <span class="ibr-icon"><svg></svg></span>
      <input class="ibr-input" value="" />
    </div>
  </div>
  <span class="ibr-error-message">Error message</span>
</div>
```

Você pode usar as classes padrões para sobrescrever os estilos padrões:

| **Classe**            | **Decrição**                               |
| --------------------- | ------------------------------------------ |
| `.ibr-input-phone`    | Container do component                     |
| `.ibr-error-message`  | Container da mensagem de erro              |
| `.ibr-container`      | Container da label e do container do input |
| `.ibr-label`          | Label do componente                        |
| `.ibr-icon-container` | Container do input + ícone                 |
| `.ibr-icon`           | Container do ícone                         |
| `.ibr-input`          | Container do input                         |

---

## 🚀 **Pronto para usar**

O componente `InputPhone` é flexível e pode ser reutilizado em diferentes contextos de formulário, como autenticação, cadastro e perfis de usuário. Com suporte a validações e personalizações, ele é uma escolha sólida para aplicações modernas.

---
