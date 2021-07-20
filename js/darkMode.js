const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

//Pegando os estilos do CSS
const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, "--body-color"),
  baseColor: getStyle(html, "--base-color"),
  bgImg: getStyle(html, "--bg-img"),
  baseColorAlt: getStyle(html, "--base-color-alt"),
  titleColor: getStyle(html, "--title-color"),
  textColor: getStyle(html, "--text-color"),
  textColorLight: getStyle(html, "--text-color-light"),
  shadowBox: getStyle(html, "--shadow-box")
}

const darkMode = {
  bg: "#333333",
  colorHeadings: "#3664FF",
  baseColor: "#4953b8",
  bgImg: "#4953b8",
  baseColorAlt: "#4953b8",
  titleColor: "#fafafa",
  textColor: "#fafafa",
  textColorLight: "#f8f8ff",
  shadowBox: "#fff"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

// Verificando mudanças no botão Checkbox
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

// Salvando o modo escuro no localStorage
const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValueLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValueLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}