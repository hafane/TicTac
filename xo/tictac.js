export function ticTac(btns, restartBtn, popupCon, popuptext, newGameBtn) {
    const winPattern = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]

    let xTurn = true
    let count = 0

    const disabledBtns = () => {
        btns.forEach(element => element.disabled = true)
        popupCon.classList.remove('hide')
    }

    const enableBtns = () => {
        btns.forEach(element => {
            element.innerText = ''
            element.disabled = false
            element.classList.remove("cross", "zero")
        })
        popupCon.classList.add('hide')
    }

    newGameBtn.addEventListener('click', () => {
        count = 0
        enableBtns()
    })

    restartBtn.addEventListener('click', () => {
        count = 0
        enableBtns()
    })

    const winFunc = (letter) => {
        disabledBtns()
        popuptext.innerHTML = `&#129351; Player ${letter} win`
    }

    const winChecker = () => {
        for(let i of winPattern) {
            let [element1, element2, element3] = [
                btns[i[0]].innerText,
                btns[i[1]].innerText,
                btns[i[2]].innerText
            ]
            if(element1 != '' && element2 != '' && element3 != '') {
                if(element1 === element2 && element2 === element3) {
                    winFunc(element1)
                }
            }
        }
    }

    btns.forEach(element => {
        element.addEventListener('click', function() {
            if(xTurn) {
                xTurn = false
                element.textContent = 'X'
                element.classList.add("cross")
                element.disabled = true
            } else {
                xTurn = true
                element.textContent = 'O'
                element.classList.add("zero")
                element.disabled = true
            }

            count += 1
            if(count === 9) {
                disabledBtns()
                popuptext.innerHTML = '&#128344; Draw'
            }
            winChecker()
        })
    });
}
