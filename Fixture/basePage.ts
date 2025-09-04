import { Page } from "@playwright/test";
import { config } from "../General/config";


export class BasePage {
  protected readonly page: Page;
  protected readonly className: string;

  constructor(page: Page) {
    this.page = page;
    this.className = this.constructor.name;
  }
  
  /**
   * Metode untuk logging yang konsisten
   * @param {string} message - Pesan yang akan dilog
   * @param {string} [level='info'] - Level log (info, warn, error)
   */
  public log(message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
    BasePage.logStatic(message, this.className, level);
  }
  
  /**
   * Metode statis untuk logging yang dapat digunakan tanpa instance
   * @param {string} message - Pesan yang akan dilog
   * @param {string} className - Nama kelas untuk prefix log
   * @param {string} [level='info'] - Level log (info, warn, error)
   */
  public static logStatic(message: string, className: string, level: 'info' | 'warn' | 'error' = 'info'): void {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${className}]`;
    
    switch (level) {
      case 'warn':
        console.warn(`${prefix} WARNING: ${message}`);
        break;
      case 'error':
        console.error(`${prefix} ERROR: ${message}`);
        break;
      default:
        console.log(`${prefix} ${message}`);
    }
  }
  async gotoBase(): Promise<void> {
    this.log(`Navigasi ke URL dasar: ${config.baseUrl}`);
    await this.page.goto(config.baseUrl);
  }

  // async gotoPath(path: string): Promise<void> {
  //   const fullUrl = `${config.baseUrl}${path}`;
  //   this.log(`Navigasi ke: ${fullUrl}`);
  //   await this.page.goto(fullUrl);
  // }
}
