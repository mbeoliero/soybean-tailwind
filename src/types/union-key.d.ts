/** The union key namespace */
declare namespace UnionKey {
  /**
   * The login module
   *
   * - pwd-login: password login
   * - code-login: phone code login
   * - register: register
   * - reset-pwd: reset password
   * - bind-wechat: bind wechat
   */
  type LoginModule = 'code-login' | 'pwd-login' | 'register' | 'reset-pwd';

  /**
   * The layout mode
   *
   * - vertical: the vertical menu in left
   * - horizontal: the horizontal menu in top
   * - vertical-mix: two vertical mixed menus in left
   * - horizontal-mix: the vertical menu in left and horizontal menu in top
   */
  type ThemeLayoutMode = 'horizontal' | 'horizontal-mix' | 'vertical' | 'vertical-mix';

  /**
   * The scroll mode when content overflow
   *
   * - wrapper: the wrapper component's root element overflow
   * - content: the content component overflow
   */
  type ThemeScrollMode = import('@sa/materials').LayoutScrollMode;

  /** Page animate mode */
  type ThemePageAnimateMode = 'fade' | 'fade-bottom' | 'fade-scale' | 'fade-slide' | 'none' | 'zoom-fade' | 'zoom-out';

  /** Theme scheme */
  type ThemeScheme = 'auto' | 'dark' | 'light';
  /**
   * Tab mode
   *
   * - chrome: chrome style
   * - button: button style
   */
  type ThemeTabMode = import('@sa/materials').PageTabMode;
}
