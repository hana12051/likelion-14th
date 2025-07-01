{
  const tabContainer = document.querySelector('.tabs__container')
  const tabs = Array.from(tabContainer.querySelectorAll('.tab'))
  const tabContents = Array.from(tabContainer.querySelectorAll('.tab__content'))
  const SELECTED_CLASSNAME = 'is-selected'

  let selectedIndex = tabs.findIndex((tab) => tab.classList.contains(SELECTED_CLASSNAME))

  tabContainer.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tab')
    if (!clickedTab || !tabContainer.contains(clickedTab)) return

    const index = tabs.indexOf(clickedTab)
    if (index === -1 || index === selectedIndex) return

    // 기존 탭/콘텐츠 비활성화
    if (selectedIndex > -1) {
      tabs.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
      tabContents.at(selectedIndex).classList.remove(SELECTED_CLASSNAME)
    }

    // 새 탭/콘텐츠 활성화
    tabs.at(index).classList.add(SELECTED_CLASSNAME)
    tabContents.at(index).classList.add(SELECTED_CLASSNAME)
    selectedIndex = index
  })
}
