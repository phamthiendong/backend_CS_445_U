export class DashboardStatsDto {
  totalBookings: number; // Tổng số lịch đặt
  totalPatients: number; // Tổng số bệnh nhân (unique)

  revenue: {
    total: number; // Tổng doanh thu (100%)
    adminShare: number; // Phần Admin (40%)
    doctorShare: number; // Phần Bác sĩ (60%)
  };

  today: {
    bookings: number;
    revenue: number;
  };
}
