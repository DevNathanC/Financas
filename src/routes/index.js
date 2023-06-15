import { createRouter, createWebHistory } from "vue-router"
import Dashboard from '../views/Dashboard.vue'
import saldo from '../views/saldo.vue'
import despesas from '../views/despesas.vue'

const routes = [
  { path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  { path: '/saldo',
    name: 'saldo',
    component: saldo
  },
  { path: '/saldo/:index',
    name: 'saldo.editar',
    component: saldo
  },
  { path: '/despesas',
    name: 'despesas',
    component: despesas
  },
  { path: '/despesas/:index',
    name: 'despesa.editar',
    component: despesas
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;

