
# SpecialTabs

A simple and customizable tabs component for React applications.

## Screenshot

[![image](https://github.com/user-attachments/assets/05943bc8-008e-4eaf-941a-ce7c54a7d383)](https://github.com/user-attachments/assets/05943bc8-008e-4eaf-941a-ce7c54a7d383)

## Here's the demo video of the application

Check out the video below for a detailed walkthrough:

[![video](https://github.com/user-attachments/assets/53f70fca-6376-461e-b044-0af34f9fc2ea)](https://github.com/user-attachments/assets/53f70fca-6376-461e-b044-0af34f9fc2ea)

## Example

## Usage

Here's an example of how to use the `SpecialTabs` component in your application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import SpecialTabs from 'special-tabs';

const App = () => {
  const screens = [
    { label: 'First', component: <div className='content-bg blue'>First Tab Content</div> },
    { label: 'Second', component: <div className='content-bg red'>Second Tab Content</div> },
    { label: 'Third', component: <div className='content-bg yellow'>Third Tab Content</div> },
  ];

  return <SpecialTabs screens={screens} defaultTabIndex={0} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props

### SpecialTabs

| Name             | Type          | Default | Description                                      |
|------------------|---------------|---------|--------------------------------------------------|
| `screens`        | `Screen[]`    | `[]`    | Array of screen objects containing label and component |
| `defaultTabIndex`| `number`      | `0`     | Index of the tab to be active initially           |

### Screen

| Name        | Type           | Description                        |
|-------------|----------------|------------------------------------|
| `label`     | `string`       | Label for the tab                  |
| `component` | `JSX.Element`  | React component to render as tab content |

## Tests

To run the tests for the component, use the following command:

```bash
npm test
```

## License

SpecialTabs is released under the MIT license.
```

## FAQ

### What is SpecialTabs?

SpecialTabs is a React component that allows you to create tabbed interfaces easily. It accepts two props: `screens` and `defaultTabIndex`. The `screens` prop is an array of objects where each object contains a `label` and a `component`. The `defaultTabIndex` sets the initially active tab.

### How do I use SpecialTabs?

To use SpecialTabs, import it into your React project and pass the required props. See the [Usage](#usage) section for an example.

### How do I run tests?

You can run the tests using `npm test`.

If you have any questions or issues, please feel free to open an issue on the GitHub repository.
```
