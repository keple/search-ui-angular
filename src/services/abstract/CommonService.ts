import {MenuDto} from '../../model/menuDto';

export  abstract class CommonService {
  public abstract getMenuList(): Array<MenuDto>;
}
