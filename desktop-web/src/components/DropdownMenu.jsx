

export default function DropdownMenu({
    menuClassName, changeArrow
}) {



  return (
            <div class="menu-container">

            <button href="#" class={menuClassName} role="button" aria-expanded="true"
                    onClick={() => changeArrow()}>

              <div>Workflow</div>
              <div className='m-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                </svg>
              </div>

            </button>


            <ul class="menu__list">

              <li class="menu__list-item">
                <a class="menu__link menu__link--active" aria-current="page" tabindex="0" href="#" >
                  Running On Device
                </a>
              </li>

              <li class="menu__list-item">
                <a class="menu__link" tabindex="0" href="#">
                  Fast Refresh
                </a>
              </li>

            </ul>
 
        </div> 
  )
}
