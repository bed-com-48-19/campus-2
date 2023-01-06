import axios from "axios"

const REPORT_API_BASE_URL = "https://campus-maintenance-system.herokuapp.com/api/v1/report"

class ReportService{
    
    saveReport(report){
        return axios.post(REPORT_API_BASE_URL, report)
    }
}

export default new ReportService();