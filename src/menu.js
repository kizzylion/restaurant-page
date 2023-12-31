import menuItems from "./menuItems.js";

export default function createMenuTab() {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `<h2>Menu</h2>
                        <p>Explore our menu and discover the perfect combination of flavors.</p>
                        `
    const menuList = document.createElement('div');
    menuList.id = 'menu-list';
    menuItems.forEach((item)=>{
        const menuItem = document.createElement('div');
        menuItem.style.width = '480px',
        menuItem.style.display = 'inline-flex',
        menuItem.style.flexDirection = 'column',
        // menuItem.style.gap = '12px',
        menuItem.style.marginRight = '20px',
        
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `<img src=${item.pic} alt=${item.alt} style=" aspect-ratio:16/9; object-fit: cover; max-width: 720px; width:100%;">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <p style="margin-bottom: 30px;">${item.price}</p>
                            `
        menuList.appendChild(menuItem);
    })
                        menuDiv.appendChild(menuList);
                        // // Add event listener to make tabbable
                        // menuDiv.addEventListener('click', () => {
                        //     menuDiv.tabIndex = 0;
                        //     menuDiv.focus();
                        // });
        document.getElementById('content').appendChild(menuDiv);
    
}