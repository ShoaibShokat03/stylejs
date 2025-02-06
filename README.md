# StyleJS

StyleJS is a lightweight JavaScript library that allows you to use inline styling with enhanced features such as responsive design and media queries. It simplifies the process of styling HTML elements without the need for external CSS files.

## Features

- **Easy to use inline styling**: Apply styles directly to HTML elements using the `stylejs` attribute.
- **Responsive design**: Use media queries within the `stylejs` attribute to create responsive designs.
- **No external CSS files**: All styles are applied inline, eliminating the need for separate CSS files.
- **Quick prototyping**: Rapidly prototype designs with inline styles.

## Getting Started

### Installation

Include the `stylejs` script in your HTML file:

```html
<script src="./stylejs/style.js"></script>
```

### Usage

Apply styles to HTML elements using the `stylejs` attribute. You can define styles directly and use media queries for responsive design.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StyleJS Example</title>
    <script src="./stylejs/style.js"></script>
  </head>
  <body
    stylejs="width:100% height:auto font-family:calibri bg:#fefefe color:blue ww-max-400px:bg:blue"
  >
    <div class="app">
      <div class="box" stylejs="padding:20px border:1px_solid_#ccc">
        <div class="heading">
          <h1
            stylejs="font-size:2rem color:#000000 bg:gray padding:10px ww-max-400px:color:red"
          >
            This is stylejs
          </h1>
        </div>
        <div class="content" stylejs="margin-top:20px">
          <p class="status" stylejs="font-size:1.2rem margin-bottom:10px">
            Not Loaded
          </p>
          <button
            type="button"
            stylejs="bg:red hover:bg:blue color:white padding:10px border:none cursor:pointer"
          >
            Hover to change color
          </button>
        </div>
        <div class="benefits" stylejs="margin-top:20px">
          <h2 stylejs="font-size:1.5rem color:#333">
            Benefits of using stylejs:
          </h2>
          <ul stylejs="list-style-type:disc padding-left:20px">
            <li stylejs="margin-bottom:5px">Easy to use inline styling</li>
            <li stylejs="margin-bottom:5px">
              Responsive design with media queries
            </li>
            <li stylejs="margin-bottom:5px">No need for external CSS files</li>
            <li stylejs="margin-bottom:5px">Quick prototyping</li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Using Hover Effects

To apply multiple hover effects, separate each effect with a `~`. For example:

```html
<button
  type="button"
  stylejs="bg:red hover:bg:blue hover:[{border-radius:5px}~{transform:rotate(60deg)}~{transform:translate(45px,0px),rotate(5deg)}~{box-shadow:0_4px_8px_rgba(0,0,0,0.2)}] transition:all~0.4s~linear color:white padding:10px border:none cursor:pointer"
>
  Hover to change color
</button>
```

## Using Spaces in Style Values

To use spaces in style values, replace spaces with `_` and separate multiple styles with `~`. For example:

```html
<div stylejs="padding:20px border:1px_solid_#ccc">
  <!-- ... -->
</div>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
