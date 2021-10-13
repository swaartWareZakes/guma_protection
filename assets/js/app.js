document.querySelectorAll('.sidebar-submenu').forEach((e) => {
  e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
    event.preventDefault();
    e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle(
      'active'
    );

    let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content');
    let dropdown_content_lis = dropdown_content.querySelectorAll('li');

    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;

    dropdown_content.classList.toggle('active');

    dropdown_content.style.height = dropdown_content.classList.contains(
      'active'
    )
      ? active_height + 'px'
      : '0';
  };
});

let data_options = {
  series: [
    {
      name: 'Occurance',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: 'General',
      data: [20, 30, 10, 20, 16, 40, 20, 51, 10],
    },
  ],
  colors: ['#bb2424af', '#357a38'],
  chart: {
    height: 350,
    type: 'line',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  legend: {
    position: 'top',
  },
};

let data_chart = new ApexCharts(
  document.querySelector('#data-chart'),
  data_options
);
data_chart.render();

setDarkChart = (dark) => {
  let theme = {
    theme: {
      mode: dark ? 'dark' : 'light',
    },
  };

  data_chart.updateOptions(theme);
  category_chart.updateOptions(theme);
};

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector('#darkmode-toggle');

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector('body').classList.toggle('dark');
  darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active');
  setDarkChart(document.querySelector('body').classList.contains('dark'));
};

let overlay = document.querySelector('.overlay');
let sidebar = document.querySelector('.sidebar');

document.querySelector('#mobile-toggle').onclick = () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
};

document.querySelector('#sidebar-close').onclick = () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
};

let divs = [
  'dashboard',
  'generalReports',
  'timeDuty',
  'occuranceReports',
  'createAccount',
  'sites',
];
let visibleId = null;

const toggleVisibility = (divId) => {
  if (visibleId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
};

const hideNonVisibleDivs = () => {
  let i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  }
};
