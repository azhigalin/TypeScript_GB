import { renderBlock } from './lib.js'

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount >= 1;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt='avatar-link' />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
