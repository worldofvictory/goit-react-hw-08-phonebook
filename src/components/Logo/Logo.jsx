import css from './Logo.module.css'


export default function Logo() {
    return (
      
        <div>
            <a href="#/home" className={css.LogoLink}> 
                <div className={css.LogoIcon}>
                    <svg>
                        <use id="logo1" href="../../assets/icons.svg#icon-logo-path1" />
                        <use id="logo2" href="../../assets/icons.svgsvg#icon-logo-path2" />
                    </svg>
                </div>
                <p className={css.LogoText}>Task Pro</p>
            </a>
        </div>
      
    );
}