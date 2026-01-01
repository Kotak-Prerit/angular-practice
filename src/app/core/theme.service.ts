import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private mediaQuery= window.matchMedia("(prefers-color-scheme: dark)");
  private lsKey = 'theme';

  initialTheme(){
    const savedTheme = localStorage.getItem(this.lsKey);

    if(savedTheme === "dark"){
      this.enableDark();
    }else if(savedTheme === "light"){
      this.enableLight();
    }else{
      this.setTheme(this.mediaQuery.matches);
    }

    this.mediaQuery.addEventListener('change', e=>{
      const hasUserOverride = localStorage.getItem(this.lsKey);
      if (!hasUserOverride) {
        this.setTheme(e.matches);
      }
    })
  }

  toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    this.setTheme(!isDark);
    localStorage.setItem(this.lsKey, !isDark ? 'dark' : 'light');
  }

  private setTheme(isDark: boolean) {
    document.body.classList.toggle('dark-theme', isDark);
  }

  private enableDark() {
    document.body.classList.add('dark-theme');
  }

  private enableLight() {
    document.body.classList.remove('dark-theme');
  }
}
