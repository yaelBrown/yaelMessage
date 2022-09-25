from flask import Blueprint
from services.dashboardService import DashboardService

dashboardController = Blueprint('dashboardController', __name__)

@dashboardController.route('/', methods=['POST'])
def dashboardInit():
  out = DashboardService.dashboardInit(26)

  return out, 200