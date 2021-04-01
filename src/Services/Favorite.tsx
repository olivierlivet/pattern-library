class Favorite {
    add(id: string) {
        console.log('added to favorite', id)
        if (typeof window !== 'undefined') {
            if (
                localStorage.getItem('Favorites')
            ) {
                let currentFavorites = JSON.parse(localStorage.getItem('Favorites'));
                if (!currentFavorites.includes(id)) {
                    currentFavorites.push(id);
                    localStorage.setItem('Favorites', JSON.stringify(currentFavorites));

                }
            } else {
                localStorage.setItem('Favorites', JSON.stringify([id]))
            }
        }
    }
    remove(id: string) {
        console.log( 'remove', id )
        if (typeof window !== 'undefined') {
            let currentFavorites = JSON.parse(localStorage.getItem('Favorites'));
            for (var i = 0; i < currentFavorites.length; i++) {
                if (currentFavorites[i] === id) {
                    currentFavorites.splice(i, 1);
                }
            }
            localStorage.setItem('Favorites', JSON.stringify(currentFavorites));
        }
    }
    get() {
        return JSON.parse(localStorage.getItem('Favorites'))
    }
    isFavorite(id: string) {
        let currentFavorites = JSON.parse(localStorage.getItem('Favorites'));
        if (!currentFavorites) { return false }
        return currentFavorites.includes(id)

    }
}

export default new Favorite()