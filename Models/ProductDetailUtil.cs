using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace ProductDetail.Models
{
    public class ProductDetailUtil
    {
        //Database related properties
        public static string sServer = "";
        public static string sDB = "";
        public static string sDBUID = "";
        public static string sPWD = "";

        // Financial Year of the logged in
        public static string _ConnStr;

        //Application Related Properties
        public static string sUserID = "";

        public static bool ShowError(string isMsg)
        {
#if DEBUG
            System.Diagnostics.Debug.WriteLine(isMsg);
#else
            MessageBox.Show(isMsg);
#endif
            return true;
        }

        public static string ConnStr
        {
            set
            {
                _ConnStr = value;
            }
            get
            {
                return "Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=Product;Data Source=LAPTOP-QMSBOJIE\\SQLEXPRESS";
            }
        }

        public static bool DBConnected()
        {
            try
            {
                using (var lObjConn = new SqlConnection(ConnStr))
                {
                    var lsQry = "SELECT 1";

                    var lObjCommand = new SqlCommand(lsQry, lObjConn);
                    lObjConn.Open();
                    lObjCommand.ExecuteScalar();
                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}