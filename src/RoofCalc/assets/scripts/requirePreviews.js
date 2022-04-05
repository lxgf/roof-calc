const titles = [
    'none',
    'gable',
    'marquee',
    'mansard',
    'valma',
    'with-window'
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