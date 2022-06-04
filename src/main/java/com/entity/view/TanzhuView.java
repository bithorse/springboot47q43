package com.entity.view;

import com.entity.TanzhuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 摊主
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-09 16:01:54
 */
@TableName("tanzhu")
public class TanzhuView  extends TanzhuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public TanzhuView(){
	}
 
 	public TanzhuView(TanzhuEntity tanzhuEntity){
 	try {
			BeanUtils.copyProperties(this, tanzhuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
