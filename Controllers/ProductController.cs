using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProductDetail.Models;
using PagedList;
using PagedList.Mvc;


namespace ProductDetail.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index(int? Page)
        {

            Product lObjProduct = new Product(ProductDetailUtil.ConnStr, ProductDetailUtil.sUserID);
            List<Product> lObjProducte = lObjProduct.ListProduct();
            if (Page == 1)
                return View(lObjProducte.ToList().ToPagedList(1, 10));
            else if (Page == 2)
                return View(lObjProducte.ToList().ToPagedList(2, 3));
            else if (Page == 3)
                return View(lObjProducte.ToList().ToPagedList(3, 3));
            else if (Page == 4)
                return View(lObjProducte.ToList().ToPagedList(4, 3));
            else if (Page == 5)
                return View(lObjProducte.ToList().ToPagedList(5, 3));
            else if (Page == 6)
                return View(lObjProducte.ToList().ToPagedList(6, 3));
            else if(Page ==7 )
                return View(lObjProducte.ToList().ToPagedList(7, 3));
            else if(Page ==8 )
                return View(lObjProducte.ToList().ToPagedList(8, 3));
            else 
                return View(lObjProducte.ToList().ToPagedList(9, 3));



            // return View(lObjProducte);
        }

        // GET: Product/Details/5
        public ActionResult Details(string isProductId)
        {
            Product lObjProductDetail = new Product(ProductDetailUtil.ConnStr,ProductDetailUtil.sUserID);
            lObjProductDetail.LoadProductDetail(isProductId);
            return View(lObjProductDetail);
        }

        // GET: Product/Create
        public ActionResult Create()
        {
            //Product lObjProduct = new Product();

            return View();
        }

        // POST: Product/Create
        [HttpPost]
        public ActionResult Create(Product iObjProduct)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // TODO: Add insert logic here
                    iObjProduct.ConnStr = ProductDetailUtil.ConnStr;
                   // iObjProduct.UserId = ProductDetailUtil.sUserID;
                    iObjProduct.Save(true);

                }
                else

                  return View(iObjProduct);

                   return RedirectToAction("Index");
            }
            catch
            {
                return View(iObjProduct);
            }
        }

        // GET: Product/Edit/5
        public ActionResult Edit(string isProductId)
        {
            Product lobjProductEdit = new Product(ProductDetailUtil.ConnStr,ProductDetailUtil.sUserID);
            lobjProductEdit.LoadProductDetail(isProductId);
            return View(lobjProductEdit);
        }

        // POST: Product/Edit/5
        [HttpPost]
        public ActionResult Edit(Product iObjProduct)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // TODO: Add update logic here
                    iObjProduct.ConnStr = ProductDetailUtil.ConnStr;
                    iObjProduct.UserId = ProductDetailUtil.sUserID;
                    if (!iObjProduct.Save(false))
                    {
                        // return RedirectToAction("Index");
                        ModelState.AddModelError("", "Unable to save ");
                        return View(iObjProduct);
                    }
                }
                return RedirectToAction("Index");
            }
            catch
            {
                ModelState.AddModelError("", "Unable to save Volunteer");
                return View(iObjProduct);
            }
        }

        // GET: Product/Delete/5
        public ActionResult Delete(string isProductId)
        {
            Product lObjProductDelete = new Product(ProductDetailUtil.ConnStr, ProductDetailUtil.sUserID);
            lObjProductDelete.LoadProductDetail(isProductId);
            return View(lObjProductDelete);
        }

        // POST: Volunteer/Delete/5
        [HttpPost]
        public ActionResult Delete(string isProductId,Product iObjProduct)
        {
            try
            {
                // TODO: Add delete logic here
                iObjProduct.ConnStr = ProductDetailUtil.ConnStr;
                iObjProduct.UserId = ProductDetailUtil.sUserID;
                iObjProduct.DeleteProduct(isProductId);
                return RedirectToAction("Index");
            }
            catch
            {
                return View(iObjProduct);
            }
        }
    }
}
