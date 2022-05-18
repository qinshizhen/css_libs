const widthSelector = document.getElementById('width');
const contentEle = document.getElementById('variable')

widthSelector.addEventListener('change', (e) => {
    console.log('====> width:', e.target.value)

    if (e.target.value === 'auto') {
        contentEle.classList.add('auto')
        contentEle.classList.remove('min-content', 'max-content', 'fit-content', 'fill-available')
    }

    if (e.target.value === 'min-content') {
        contentEle.classList.add('min-content')
        contentEle.classList.remove('auto', 'max-content', 'fit-content', 'fill-available')
    }

    if (e.target.value === 'max-content') {
        contentEle.classList.add('max-content')
        contentEle.classList.remove('min-content', 'auto', 'fit-content', 'fill-available')
    }

    if (e.target.value === 'fit-content') {
        contentEle.classList.add('fit-content')
        contentEle.classList.remove('min-content', 'max-content', 'auto', 'fill-available')
    }

    if (e.target.value === 'fill-available') {
        contentEle.classList.add('fill-available')
        contentEle.classList.remove('min-content', 'max-content', 'fit-content', 'auto')
    }
})
