import { Package, Eye, ShoppingCart, TrendingUp, Users, DollarSign, BarChart3, ArrowUpRight, ArrowDownRight, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const stats = [
  { title: "Total Products", value: "124", icon: Package, change: "+12%", trend: "up", color: "text-blue-500" },
  { title: "Store Views", value: "2,847", icon: Eye, change: "+23%", trend: "up", color: "text-green-500" },
  { title: "Orders", value: "89", icon: ShoppingCart, change: "+8%", trend: "up", color: "text-purple-500" },
  { title: "Revenue", value: "$12,459", icon: DollarSign, change: "+15%", trend: "up", color: "text-orange-500" },
];

const additionalStats = [
  { title: "Active Customers", value: "1,234", icon: Users, change: "+5%", trend: "up" },
  { title: "Conversion Rate", value: "3.2%", icon: BarChart3, change: "-0.4%", trend: "down" },
  { title: "Avg Order Value", value: "$139", icon: TrendingUp, change: "+12%", trend: "up" },
  { title: "Pending Orders", value: "12", icon: Clock, change: "-3", trend: "down" },
];

const recentOrders = [
  { id: "ORD-001", customer: "John Doe", product: "Wireless Headphones", amount: "$129", status: "Completed", date: "2 hours ago" },
  { id: "ORD-002", customer: "Jane Smith", product: "Smart Watch", amount: "$299", status: "Processing", date: "4 hours ago" },
  { id: "ORD-003", customer: "Mike Johnson", product: "Laptop Stand", amount: "$79", status: "Shipped", date: "6 hours ago" },
  { id: "ORD-004", customer: "Sarah Wilson", product: "USB-C Hub", amount: "$59", status: "Completed", date: "8 hours ago" },
  { id: "ORD-005", customer: "Alex Brown", product: "Mechanical Keyboard", amount: "$149", status: "Processing", date: "12 hours ago" },
];

const salesData = [
  { name: "Mon", sales: 2400, visitors: 1200 },
  { name: "Tue", sales: 1398, visitors: 980 },
  { name: "Wed", sales: 9800, visitors: 2100 },
  { name: "Thu", sales: 3908, visitors: 1500 },
  { name: "Fri", sales: 4800, visitors: 1800 },
  { name: "Sat", sales: 3800, visitors: 1400 },
  { name: "Sun", sales: 4300, visitors: 1600 },
];

const topProducts = [
  { name: "Wireless Headphones", sales: 45, revenue: 5805 },
  { name: "Smart Watch Pro", sales: 38, revenue: 11362 },
  { name: "Leather Backpack", sales: 32, revenue: 2848 },
  { name: "Running Shoes", sales: 28, revenue: 4452 },
  { name: "Sunglasses", sales: 24, revenue: 1896 },
];

const categoryData = [
  { name: "Electronics", value: 45, color: "#0ea5e9" },
  { name: "Accessories", value: 30, color: "#8b5cf6" },
  { name: "Footwear", value: 15, color: "#f97316" },
  { name: "Clothing", value: 10, color: "#10b981" },
];

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center mt-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {additionalStats.map((stat) => (
          <Card key={stat.title} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
              <span className={`text-xs font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.title}</div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Sales & Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="hsl(var(--primary))"
                    fill="url(#salesGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-xs text-muted-foreground">{cat.name}</span>
                  <span className="text-xs font-medium ml-auto">{cat.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{product.name}</div>
                    <div className="text-sm text-muted-foreground">{product.sales} sales</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">${product.revenue.toLocaleString()}</div>
                    <Progress value={(product.sales / 45) * 100} className="h-1 w-20 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground">Order</th>
                    <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground">Amount</th>
                    <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border last:border-0">
                      <td className="py-2 px-2">
                        <div className="text-sm font-medium text-foreground">{order.id}</div>
                        <div className="text-xs text-muted-foreground">{order.date}</div>
                      </td>
                      <td className="py-2 px-2 text-sm text-muted-foreground">{order.customer}</td>
                      <td className="py-2 px-2 text-sm font-medium text-foreground">{order.amount}</td>
                      <td className="py-2 px-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Completed" ? "bg-green-100 text-green-700" :
                          order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;