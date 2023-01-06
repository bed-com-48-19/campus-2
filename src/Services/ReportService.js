import axios from "axios"

const REPORT_API_BASE_URL = "http://localhost:8081/api/v1/report"

class ReportService{
    
    saveReport(report){
        return axios.post(REPORT_API_BASE_URL, report)
    }
}

export default new ReportService();