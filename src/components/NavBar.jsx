const links = [
    { id: 1, text: 'Characters', url: '#', current: false },
    { id: 2, text: 'Comics', url: '#', current: true },
    { id: 3, text: 'Movies', url: '#', current: false },
    { id: 4, text: 'TV', url: '#', current: false },
    { id: 5, text: 'Games', url: '#', current: false },
    { id: 6, text: 'Collectibles', url: '#', current: false },
    { id: 7, text: 'Videos', url: '#', current: false },
    { id: 8, text: 'Fans', url: '#', current: false },
    { id: 9, text: 'News', url: '#', current: false },
    { id: 10, text: 'Shop', url: '#', current: false },
];


const NavBar = (props) => {
  const { links } = props

  return (
      <ul className="navbar-nav ms-auto">
          {
              links.map((element) => {

                  const { id, text, url, current } = element;

                  return (
                      <li key={id} className={current ? "active" : ""}>
                          <a className="nav-link text-dark" href={url}>
                              {text}
                          </a>
                      </li>
                  )
              })
          }
      </ul>

  )
}

export default NavBar