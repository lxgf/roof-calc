const titles = [
    'none',
    'gable',
    'marquee',
    'mansard',
    'valma',
    'with-window',
    'width',
    'length',
    'light-blue',
    'white',
    'yellow',
    'green',
    'red',
    'orange',
    'black'
]

const images = []
titles.forEach(title => {
    const image = require('../images/previews/' + title + '.webp')
    images.push({title: title, path: image})
})

const requirePreviews = () => {
    return images
}

export default requirePreviews