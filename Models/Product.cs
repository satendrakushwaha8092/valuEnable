using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;


namespace ProductDetail.Models
{
    public class Product
    {
        [Required(ErrorMessage ="Enter ProductId")]
        [Display(Name="Product Id")]
        [StringLength(10)]
        public string sProductId { set; get; }

        [Required(ErrorMessage ="Enter ProductName")]
        [Display(Name ="Product Name")]
        [StringLength(20)]
        public string sProductName { set; get; }

        [Required(ErrorMessage ="Enter CategoryId")]
        [Display(Name ="Category Id")]
        [StringLength(10)]
        public string sCategoryId { set; get; }

        [Required(ErrorMessage ="Enter CategoryName")]
        [Display(Name ="Category Name")]
        [StringLength(20)]
        public string sCategoryName { set; get; }

        //Supporting properties
        public string ConnStr;
        public string UserId;

        public Product()
        {

        }

        public Product(string isConStr, string isUserId)
        {
            ConnStr = isConStr;
            UserId = isUserId;
        }

        //Save methods for Prodcut
        public bool Save(bool ibNewMode)
        {
            try
            {
                using(SqlConnection lobjCon = new SqlConnection(ConnStr))
                {
                    if(ibNewMode)
                    {
                        string lsQuery = "INSERT INTO ProductDetail(ProductId, ProductName, CategoryId, CategoryName)";
                               lsQuery += "VALUES (@ProductId, @ProductName, @CategoryId, @CategoryName)";

                        using(SqlCommand cmd=new SqlCommand(lsQuery))
                        {
                            cmd.Connection = lobjCon;
                            cmd.CommandType = CommandType.Text;

                            cmd.Parameters.AddWithValue("@ProductId", SqlDbType.VarChar).Value = sProductId;
                            cmd.Parameters.AddWithValue("@ProductName", SqlDbType.VarChar).Value = sProductName;
                            cmd.Parameters.AddWithValue("@CategoryId", SqlDbType.VarChar).Value = sCategoryId;
                            cmd.Parameters.AddWithValue("@CategoryName", SqlDbType.VarChar).Value = sCategoryName;

                            lobjCon.Open();
                            cmd.ExecuteNonQuery();
                            lobjCon.Close();
                            return true;
                        }
                    }
                    else
                    {

                        string lsQuery = " UPDATE  ProductDetail SET  ProductName = @ProductName, CategoryId = @CategoryId, CategoryName = @CategoryName";
                               lsQuery += " WHERE ProductId = @ProductId";

                        using (SqlCommand cmd = new SqlCommand(lsQuery))
                        {
                            cmd.Connection = lobjCon;
                            cmd.CommandType = CommandType.Text;


                            cmd.Parameters.AddWithValue("@ProductId", SqlDbType.VarChar).Value = sProductId;
                            cmd.Parameters.AddWithValue("@ProductName", SqlDbType.VarChar).Value = sProductName;
                            cmd.Parameters.AddWithValue("@CategoryId", SqlDbType.VarChar).Value = sCategoryId;
                            cmd.Parameters.AddWithValue("@CategoryName", SqlDbType.VarChar).Value = sCategoryName;

                            lobjCon.Open();
                            cmd.ExecuteNonQuery();
                            lobjCon.Close();
                            return true;

                        }

                    }

                }

            }
            catch (SqlException ex)
            {
                ProductDetailUtil.ShowError(ex.Message);
                return false;
            }
        }

        //List Method for Product
        public List<Product> ListProduct()
        {
            List<Product> lObjProduct = new List<Product>();

            try
            {
                using (SqlConnection lObjCon = new SqlConnection(ConnStr))
                {
                    string lsQuery = "SELECT ProductId,ProductName,CategoryId,CategoryName FROM ProductDetail Order By ProductId ";
                    

                    SqlCommand cmd = new SqlCommand(lsQuery, lObjCon);
                    cmd.CommandType = CommandType.Text;
                    lObjCon.Open();
                    using (SqlDataReader lObjSDR = cmd.ExecuteReader())
                    {
                        if (lObjSDR.HasRows)
                        {
                            while (lObjSDR.Read())
                            {
                                sProductId = lObjSDR["ProductId"].ToString();
                                sProductName = lObjSDR["ProductName"].ToString();
                                sCategoryId = lObjSDR["CategoryId"].ToString();
                                sCategoryName = lObjSDR["CategoryName"].ToString();


                                lObjProduct.Add(new Product(this));
                            }
                        }
                        else
                        {
                            lObjCon.Close();

                        }
                    }

                }
            }
            catch (SqlException ex)
            {
                ProductDetailUtil.ShowError(ex.Message);
            }
            return lObjProduct;
        }

        public Product(Product iObjProduct)
        {
            this.sProductId = iObjProduct.sProductId;
            this.sProductName = iObjProduct.sProductName;
            this.sCategoryId = iObjProduct.sCategoryId;
            this.sCategoryName = iObjProduct.sCategoryName;


        }

        //Load method fro product
        public bool LoadProductDetail(string  isProductId)
        {

            try
            {
                using (SqlConnection lObjCon = new SqlConnection(ConnStr))
                {
                    string lsQuery = "SELECT ProductId,ProductName,CategoryId,CategoryName FROM ProductDetail WHERE ProductId = @ProductId";

                    using (SqlCommand cmd = new SqlCommand(lsQuery, lObjCon))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@ProductId", SqlDbType.VarChar).Value = isProductId;

                        lObjCon.Open();

                        using (SqlDataReader lObjSDR = cmd.ExecuteReader())
                        {
                            if (lObjSDR.HasRows)
                            {
                                while (lObjSDR.Read())
                                {
                                    sProductId = lObjSDR["ProductId"].ToString();
                                    sProductName = lObjSDR["ProductName"].ToString();
                                    sCategoryId = lObjSDR["CategoryId"].ToString();
                                    sCategoryName = lObjSDR["CategoryName"].ToString();
                                    
                                }
                                lObjCon.Close();
                            }
                            else
                            {
                                lObjCon.Close();
                                return false;
                            }
                        }
                    }
                }

            }
            catch (SqlException ex)
            {
                ProductDetailUtil.ShowError(ex.Message);
                return false;
            }
            return true;
        }
        //Delete Product Detail
        public bool DeleteProduct(string  isProductId)
        {
            try
            {
                using (SqlConnection lobjCon = new SqlConnection(ConnStr))
                {
                    string lsQuery = " DELETE FROM ProductDetail WHERE ProductId = @ProductId ";

                    using (SqlCommand cmd = new SqlCommand(lsQuery))
                    {
                        cmd.Connection = lobjCon;
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@ProductId", SqlDbType.VarChar).Value = isProductId;

                        lobjCon.Open();
                        cmd.ExecuteNonQuery();
                        lobjCon.Close();
                        return true;
                    }
                }
            }
            catch (SqlException ex)
            {
                ProductDetailUtil.ShowError(ex.Message);
                return false;
            }
        }
    }
}