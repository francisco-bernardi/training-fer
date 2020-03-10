let num = document.querySelector('input#txtn')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#selcartas')
let valores = []


function agregarCarta() {
     if (valores.length >= 3) {
        valores.splice(3 , 1)
        window.alert('Seleccionar solo 3 cartas!')
     } else if (isNumber(num.value) && !inList(num.value, valores) ) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Carta ${num.value} agregada.`
        lista.appendChild(item)
        res.innerHTML = ''
        //res.innerHTML = `Cantidad de cartas agregadas es ${valores.length}`
    } else {
        window.alert('Valor incorrecto o ya encontrado en la lista')
    }
    num.value = ''
    num.focus()
}


function isNumber(n) {
    if(Number(n) >= 0 && Number(n) <= 21) {
        return true
    } else {
        return false
    }
}

function inList(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// cartas


//Botón que calcula la tirada:
function tirada() {
    if (valores.length == 0 || valores.length <= 2) {
        window.alert("Agrega 3 cartas para realizar la tirada")
    } else {
        let carta1 = valores[0]
        let carta2 = valores[1]
        let carta3 = valores[2]


    }
}