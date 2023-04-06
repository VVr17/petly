import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { selectIsAuthState } from 'redux/user/userSelectors';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import { statusFilter } from 'redux/filter/filterConstans';
import {
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
} from 'redux/api/noticesApi';

export const useToggleFavorites = () => {
  const isAuth = useSelector(selectIsAuthState);
  const favorites = useSelector(selectFavoritesState);
  const currentCategory = useSelector(selectStatusFilter);
  const { formatMessage } = useIntl();

  const [addNoticeToFavorite, { isLoading: adding }] =
    useAddNoticeToFavoriteMutation();

  const [deleteNoticeFromFavorite, { isLoading: removing }] =
    useRemoveNoticeFromFavoriteMutation();

  const toggleFavorites = async ({
    noticeId,
    modalLearnMoreIsOpen = false,
  }) => {
    const isFavorite = favorites?.includes(noticeId);

    if (!isAuth) {
      toast.info(formatMessage({ id: 'toastRegisterLogin' }));
      return;
    }

    if (isFavorite) {
      await deleteNoticeFromFavorite(noticeId);
      toast.info(formatMessage({ id: 'toastRemovedNotice' }));

      if (
        currentCategory === statusFilter.favoriteAds &&
        modalLearnMoreIsOpen
      ) {
        document.body.classList.remove('modal-open');
      }

      return;
    }

    await addNoticeToFavorite(noticeId);
    toast.info(formatMessage({ id: 'toastAddedNotice' }));

    if (currentCategory === statusFilter.favoriteAds && modalLearnMoreIsOpen) {
      document.body.classList.remove('modal-open');
    }
  };

  return [toggleFavorites, { isFavoritesLoading: adding || removing }];
};
